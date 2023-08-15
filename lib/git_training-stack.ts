import * as cdk from 'aws-cdk-lib';
import {Bucket } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs';
import { bucket_name } from './parameters';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class GitTrainingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'MyFirstBucket', {
      versioned: true,
      bucketName :bucket_name

    }
    )
  }
}



