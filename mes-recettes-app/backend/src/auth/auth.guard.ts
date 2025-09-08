import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

const jwksClient = require('jwks-rsa');

@Injectable()
export class AuthGuard implements CanActivate {
  private client = jwksClient({
    jwksUri: `https://dev-4el5cyfmrubreq43.us.auth0.com/.well-known/jwks.json`,
  });

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token manquant');
    }

    try {
      const decoded = await this.verifyToken(token);
      request.user = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token invalide');
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private async verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const decoded = jwt.decode(token, { complete: true });
      if (!decoded) {
        return reject(new Error('Token invalide'));
      }

      this.client.getSigningKey(decoded.header.kid, (err, key) => {
        if (err) {
          return reject(err);
        }

        const signingKey = key.getPublicKey();
        jwt.verify(token, signingKey, {
          audience: 'https://mes-recettes-api',
          issuer: 'https://dev-4el5cyfmrubreq43.us.auth0.com/',
          algorithms: ['RS256'],
        }, (verifyErr, verifyDecoded) => {
          if (verifyErr) {
            return reject(verifyErr);
          }
          resolve(verifyDecoded);
        });
      });
    });
  }
}