module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAQRZVSTV3XWB274B6',
        secretAccessKey: '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',
        region: 'us-west-2',
        params: {
		Bucket: 'tarang-images',
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});
