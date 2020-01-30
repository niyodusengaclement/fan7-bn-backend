import jwt from 'jsonwebtoken';
import 'dotenv';
import UserRepository from '../repositories/userRepository';

/**
 * @description AuthUtils authentication utility class
 */
class AuthUtils {
  /**
   * @function jwtVerify
   * @param {String} token String
   * @returns {Object} decoded token
   */
  static jwtVerify(token) {
    const decodedToken = jwt.verify(token, process.env.KEY);
    return decodedToken;
  }

  /**
    *
    * @param {string} email
    * @returns {boolean} isEmailExists is true if email exists
    */
  static async emailExists({ email }) {
    const isEmailExists = await UserRepository.findByEmail(email);
    return !!isEmailExists;
  }
}

export default AuthUtils;