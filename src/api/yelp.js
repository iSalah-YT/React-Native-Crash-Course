import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer D7npeXsvU64MFgi9Ya_IiwleJV7zTcyy0lwz2jeu0w9m-t2h4lXMCZL0T9m0Zyz2DIe-94vIFiXedMNG7sHu_cMD2AKCCDsPNGoSNDRteSnrdSAc3bXG9DRMH0xMY3Yx',
  },
})
