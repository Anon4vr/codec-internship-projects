Project 1: Static Website Hosting on AWS S3

Objective

Deploy a professional portfolio website using AWS Simple Storage Service to understand cloud-based static website hosting and content delivery.

Technologies Used

AWS S3 (Simple Storage Service)

HTML5 and CSS3

AWS Bucket Policies

AWS IAM (Identity and Access Management)


What I Built

I created a static portfolio website and deployed it using AWS S3 with public hosting enabled. This project taught me the fundamentals of cloud storage, object-level permissions, and how to configure public access policies securely.

Key Learning Outcomes

Through this project I learned how AWS S3 serves as more than just storage - it can function as a complete web hosting platform for static content. I configured bucket policies to allow public read access while maintaining security, which is a critical skill for cloud security roles. Understanding the distinction between bucket-level and object-level permissions helped me grasp AWS security models.

Architecture Highlights

The website uses a single S3 bucket configured with static website hosting enabled. I implemented a bucket policy that allows public GetObject permissions while blocking all other operations, following the principle of least privilege. The S3 endpoint automatically serves the index.html file as the default document.
