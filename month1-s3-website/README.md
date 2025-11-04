# Project 1: Static Website Hosting on AWS S3

**Objective** - Deploy a professional portfolio website using AWS Simple Storage Service to understand cloud-based static website hosting and content delivery.

**Technical Challenge** - Deploy a static website using AWS infrastructure while implementing proper access controls and understanding cloud storage security models.
Business Context: Static website hosting on S3 represents a fundamental pattern in cloud architecture that balances cost efficiency with security. Understanding this pattern is crucial because misconfigured S3 buckets represent one of the most common cloud security vulnerabilities, leading to numerous data breaches in real-world scenarios.

**Implementation Details** - I created an S3 bucket with specific naming conventions that ensure global uniqueness while maintaining organizational clarity. The bucket was configured with static website hosting enabled, which required understanding how S3 can serve as both an object storage system and a web server simultaneously. This dual nature of S3 is important for security professionals to understand because it affects how access controls must be configured.

The security implementation focused on bucket policies that grant public read access to website content while blocking all other operations. This required writing JSON policy documents that use AWS IAM policy language to explicitly define allowed actions. I configured the policy to allow s3:GetObject actions for all principals on objects within the bucket, while implicitly denying all other operations like s3:PutObject or s3:DeleteObject through the absence of those permissions.

I learned to distinguish between bucket-level policies, object-level ACLs, and the block public access settings that act as a safety override. Understanding this three-tier permission model is essential because real-world S3 security requires coordinating all three layers properly. A single misconfiguration at any layer can expose sensitive data despite protections at other layers.

**Security Lessons Learned** - The principle of least privilege became tangible through this project. Rather than making the entire bucket public or granting broad permissions, I learned to grant precisely the minimum access required for the website to function. This meant enabling public read access only for the specific objects that needed to be accessible while keeping the bucket configuration itself private.

I also gained practical understanding of how CloudFront CDN could be added as an additional security layer, sitting in front of S3 to provide DDoS protection, geographic restrictions, and HTTPS encryption. While I didn't implement CloudFront in this initial project, understanding this architectural pattern prepared me for thinking about defense-in-depth strategies where multiple services work together to provide comprehensive security.


**What I Built** - I created a static portfolio website and deployed it using AWS S3 with public hosting enabled. This project taught me the fundamentals of cloud storage, object-level permissions, and how to configure public access policies securely.

**Key Learning Outcomes** - Through this project I learned how AWS S3 serves as more than just storage - it can function as a complete web hosting platform for static content. I configured bucket policies to allow public read access while maintaining security, which is a critical skill for cloud security roles. Understanding the distinction between bucket-level and object-level permissions helped me grasp AWS security models.

**Architecture Highlights** - The website uses a single S3 bucket configured with static website hosting enabled. I implemented a bucket policy that allows public GetObject permissions while blocking all other operations, following the principle of least privilege. The S3 endpoint automatically serves the index.html file as the default document.

**AWS S3 Static Website Hosting Architecture**


<img width="2048" height="2048" alt="image" src="https://github.com/user-attachments/assets/3a55b4ba-4a98-499a-99e3-5dc04d24ed59" />
