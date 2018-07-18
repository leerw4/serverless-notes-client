const dev = {
  STRIPE_KEY: "pk_test_LXSDbG6XacAze9UD6Tuep5z8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-api-dev-attachmentsbucket-1e7cag8miu4ig"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://btkcx15eob.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9iJmXFDCG",
    APP_CLIENT_ID: "28fdbcvbmn2843hrum8atrvs8n",
    IDENTITY_POOL_ID: "us-east-1:7a2975c7-2e94-45e0-965b-bb749c35e871"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_LXSDbG6XacAze9UD6Tuep5z8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-api-prod-attachmentsbucket-z91jxhjoaqgb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://j6gke63k50.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_E1Q0Jk8zl",
    APP_CLIENT_ID: "6qt0tsur6t4oq7qee6hckorngt",
    IDENTITY_POOL_ID: "us-east-1:4e988a1c-38ad-4244-b103-1f798719dfb5"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};