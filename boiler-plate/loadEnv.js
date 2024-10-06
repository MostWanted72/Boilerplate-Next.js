import fs from 'fs';
import path from 'path';

// Get the environment from the command line argument or default to development
const env = process.env.NODE_ENV || 'development';

// Construct the path to the JS file
const envFilePath = path.join(process.cwd(), 'env', `${env}.js`);

// Check if the environment file exists
if (fs.existsSync(envFilePath)) {
  // Load the environment variables
  const envConfig = await import(envFilePath);
  
  // Assign environment variables to process.env
  for (const key in envConfig.devConfig) {
    process.env[key] = envConfig[key];
  }
} else {
  console.error(`Environment file not found: ${envFilePath}`);
}
