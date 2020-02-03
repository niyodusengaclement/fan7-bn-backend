import UserRepository from '../repositories/userRepository';
import Response from '../utils/response';
import ImageUploader from '../utils/imageUploader.util';

class UserProfile {
  /**
       *
       * @param {req} req
       * @param {res} res
       * @returns {obj} returns a response
       */
  static async getUser({ userData }, res) {
    let response;
    const { id } = userData;

    try {
      const search = await UserRepository.findByUserId(id);
      if (!search) {
        response = new Response(res, 404, 'User not found');
        return response.sendErrorMessage();
      }
      const { dataValues } = search;
      const { password, ...user } = dataValues;

      response = new Response(res, 200, 'User profile data', user);
      return response.sendSuccessResponse();
    } catch (error) {
      response = new Response(res, 500, `Internal Server Error: ${error}`);
      return response.sendErrorMessage();
    }
  }

  /**
       *
       * @param {req} req
       * @param {res} res
       * @returns {obj} returns a response
       */
  static async updateUser(req, res) {
    let response;
    const { userData, profileData } = req;

    try {
      if (req.files && req.files.image) {
        // uploading to cloudinary
        const imageUrl = await ImageUploader.uploadImage(req.files.image);
        if (!imageUrl) {
          response = new Response(res, 415, 'Please Upload a valid image');
          return response.sendErrorMessage();
        }

        profileData.image_url = imageUrl;
      }

      await UserRepository.update({ id: userData.id }, profileData);

      response = new Response(res, 200, 'User profile data', profileData);
      return response.sendSuccessResponse();
    } catch (error) {
      response = new Response(res, 500, 'Internal Serevr Error');
      return response.sendErrorMessage();
    }
  }
}

export default UserProfile;
