import { JwtPayload } from 'jsonwebtoken';
export interface TokenDecoded extends JwtPayload {
    id: string;
    email: string;
}
//# sourceMappingURL=utils.d.ts.map