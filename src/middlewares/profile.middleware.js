import 'dotenv';
import Response from '../utils/response';
import UserSchema from '../modules/userSchema';
import validator from '../utils/validator';
import AuthUtils from '../utils/auth.utils';
import ImageUploader from '../utils/imageUploader.util';

const { trimmer } = validator;

/**
 * @description AuthMiddleware checks if the token was loggedout or not
 */
class ProfileMiddleware {
  /**
   * @param {req} req object
   * @param {res} res object
   * @param {next} next forwards request to the next middleware function
   * @returns {obj} returns a response object
  */
  static async validate(req, res, next) {
    let response;
    try {
      const { userData } = req;
      const profileData = trimmer(req.body);
      const { error } = UserSchema.profile(profileData);
      const verified = await AuthUtils.isVerified(userData);

      if (!verified) {
        response = new Response(res, 400, 'Your account is not yet verified');
        return response.sendErrorMessage();
      }

      if (error) {
        response = new Response(res, 422, error.message);
        return response.sendErrorMessage();
      }

      if (req.files && req.files.image) {
        const imageUrl = await ImageUploader.uploadImage(req.files.image);
        if (!imageUrl) {
          response = new Response(res, 415, 'Please Upload a valid image');
          return response.sendErrorMessage();
        }

        profileData.image_url = imageUrl;
      }

      req.profileData = profileData;
      return next();
    } catch (err) {
      response = new Response(res, 500, err);
      return response.sendErrorMessage();
    }
  }
}

export default ProfileMiddleware;
