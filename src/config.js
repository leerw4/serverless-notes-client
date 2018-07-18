export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	s3: {
		REGION: "us-east-1",
		BUCKET: "notes-app-uploads-rwl"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://s7781i8xk9.execute-api.us-east-1.amazonaws.com/prod"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_oF2ApLe03",
		APP_CLIENT_ID: "77ce4f7jb9hv589bk5oc74bu4u",
		IDENTITY_POOL_ID: "us-east-1:4bcc2c3e-793d-4d15-bc5b-d78c6e832c02"
	}

};