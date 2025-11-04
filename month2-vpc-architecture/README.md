Project 2: Secure VPC Architecture with Multi-Layer Security

Objective

Design and implement a production-grade secure network architecture using AWS Virtual Private Cloud, demonstrating defense-in-depth security principles and proper network segmentation.

Technologies Used

AWS VPC (Virtual Private Cloud)

AWS EC2 (Elastic Compute Cloud)

Application Load Balancer

NAT Gateway

Security Groups

Network Access Control Lists (NACLs)

Elastic IP

Multiple Availability Zones

What I Built

I designed and deployed a complete secure network architecture with public and private subnets, implementing multiple layers of security controls. The architecture includes a bastion host for secure administrative access, a NAT Gateway for controlled internet access from private resources, and an Application Load Balancer to distribute traffic to web servers hidden in a private subnet.

Architecture Overview

The architecture consists of a VPC with CIDR block 10.0.0.0/16, divided into public and private subnets across two availability zones for high availability.

Public Subnet (10.0.1.0/24): This subnet hosts internet-facing resources including the Application Load Balancer which receives all incoming web traffic, the Bastion Host which serves as the secure entry point for SSH administration, and the NAT Gateway which provides controlled internet access for private subnet resources.

Private Subnet (10.0.2.0/24): This isolated subnet hosts the actual web server, completely hidden from direct internet access. The web server can only be reached through the Application Load Balancer, implementing a zero-trust architecture where no direct connections are permitted.

Security Implementation

I implemented defense-in-depth through multiple security layers, each providing a different type of protection.

Network Access Control Lists serve as the first line of defense at the subnet level, acting like a stateless firewall. I configured separate NACLs for public and private subnets with explicit allow and deny rules for different types of traffic.

Security Groups provide the second layer at the instance level, acting as stateful firewalls. The bastion security group only allows SSH from my IP address. The web server security group allows HTTP from anywhere but SSH only from the bastion host. The load balancer security group allows HTTP from anywhere to accept public web traffic.

Network segmentation provides the third layer through complete subnet isolation. The private subnet has no internet gateway route, meaning resources inside cannot be accessed directly from the internet. All outbound internet traffic must go through the NAT Gateway, which logs and controls connections.

The Bastion Host architecture implements a jump box pattern where administrators must first SSH into the bastion in the public subnet, then jump from there to resources in the private subnet. This creates an audit trail and single point of controlled access.

Why This Architecture Matters for Cybersecurity

This project directly applies to cloud security roles because it demonstrates several critical concepts. Network segmentation limits the blast radius of any security breach - if the load balancer were compromised, the attacker still cannot directly access the web server. Defense-in-depth ensures that bypassing one security control does not grant full access. The principle of least privilege is applied at every layer, with each component having only the minimum permissions needed. The architecture is auditable, with clear entry and exit points for traffic that can be logged and monitored.

Technical Challenges Solved

During implementation I learned that AWS Load Balancers require at least two availability zones, which taught me about high availability requirements. I configured routing tables properly to ensure the private subnet could reach the internet through NAT while remaining unreachable from the internet. I debugged security group rules to understand the difference between stateful (Security Groups) and stateless (NACLs) firewalls. I verified the architecture by confirming the web server had no public IP but was still accessible through the load balancer.
