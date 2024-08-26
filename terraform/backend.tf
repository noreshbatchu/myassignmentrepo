terraform {
  backend "s3" {
    bucket         = "noreshstatebucket"  # Your S3 bucket name
    key            = "state/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
