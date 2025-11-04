# Codec Technologies - Cloud Computing Internship Projects

**Overview**

This repository contains documentation and screenshots of three progressive cloud computing projects completed during my internship at Codec Technologies. Each project demonstrates different aspects of cloud infrastructure, security, and deployment strategies.


## Month 1: AWS S3 Static Website Hosting
**Objective:** Deploy a static website using AWS S3

**Technologies Used:** AWS S3, HTML, CSS

**Screenshots:**
- [S3 Bucket Configuration](month1-s3-website/screenshots)
- [Live Website](month1-s3-website/screenshots)

**What I Learned:** 
- AWS S3 bucket policies
- Static website hosting
- Public access configuration

---

## Month 2: Secure VPC Architecture
**Objective:** Design and implement a secure network architecture using VPC

**Technologies Used:** AWS VPC, EC2, Security Groups, NACLs, NAT Gateway, Application Load Balancer

**Architecture:**
- Public Subnet (10.0.1.0/24) - Internet-facing resources
- Private Subnet (10.0.2.0/24) - Protected backend servers
- NAT Gateway for secure internet access from private subnet
- Bastion Host for secure SSH access
- Application Load Balancer for traffic distribution

**Security Features:**
- Multi-layered security (Security Groups + NACLs)
- Private subnet isolation
- Bastion host for controlled access
- Defense-in-depth strategy

**Screenshots:**
- [VPC Architecture](month2-vpc-architecture/screenshots)
- [Load Balancer Active](month2-vpc-architecture/screenshots)
- [Website Working](month2-vpc-architecture/screenshots)
- [All other screenshots...]

---

## Month 3: Cloud-Based Weather Application
**Objective:** Build a weather application using cloud APIs

**Technologies Used:** HTML, JavaScript, OpenWeather API, Netlify

**Features:**
- Real-time weather data
- City search functionality
- Responsive design

**Screenshots:**
- [App Screenshot](month3-weather-app/screenshots)
```

Skills Demonstrated Across All Projects

Through these three projects I have demonstrated proficiency in several interconnected areas 
of cloud computing.

AWS Cloud Services: I gained hands-on experience with core AWS services including S3 for storage 
and hosting, VPC for network design, EC2 for compute resources, load balancing for traffic distribution,
and IAM for security and permissions management.

Network Security: I implemented proper network segmentation creating DMZ and private zones, configured
multiple firewall layers using both Security Groups and NACLs, designed secure access patterns with
bastion hosts, and applied the principle of least privilege throughout the architecture.

Cloud Architecture: I designed for high availability using multiple availability zones, implemented 
defense-in-depth security strategies, created scalable architectures using load balancers,
and properly documented all architectural decisions and implementations.

DevOps and Deployment: I worked with infrastructure as code concepts through AWS console, 
deployed applications to cloud platforms like Netlify, integrated external APIs into web applications, 
and understood continuous deployment workflows.

Cybersecurity Relevance: These projects directly relate to cloud security analyst roles, security
operations center positions, and cloud architecture security reviews. The skills demonstrated include threat 
modeling through proper network design, implementing security controls at multiple layers, understanding 
attack surfaces and how to minimize them, and documenting security architectures for compliance and auditing.

Future Learning Goals
This internship has prepared me for several next steps in my cloud and cybersecurity career. I plan to
pursue AWS Security Specialty certification to deepen my security knowledge, learn Infrastructure 
as Code using Terraform or CloudFormation to automate deployments, explore container security with
Docker and Kubernetes, and study advanced topics like WAF implementation, DDoS protection, and
security monitoring with CloudWatch and GuardDuty.

Acknowledgments
I would like to thank Codec Technologies for providing this learning opportunity, and specifically for 
the structured project approach that allowed me to progressively build my cloud computing skills 
from basic deployment to complex security architectures.
