# Project 2: Secure VPC Architecture with Multi-Layer Defense

**Technical Challenge:** Design and implement a complete virtual network infrastructure that segregates resources by security level, implements multiple firewall layers, and provides controlled access paths for both user traffic and administrative operations.

**Business Context:** Virtual Private Cloud architecture represents the foundation of all cloud security. Every other security control builds on top of proper network segmentation. This project simulates the network design decisions that cloud architects and security engineers make when building production environments for real applications handling sensitive data.

**Architectural Philosophy:**
My architecture implements defense-in-depth through six distinct security layers, each providing different types of protection. This multi-layer approach means that an attacker must successfully bypass multiple independent security controls to reach protected resources, dramatically reducing the likelihood of successful intrusion.

The network design divides the VPC into distinct security zones. The public subnet acts as a demilitarized zone where internet-facing resources operate under heightened scrutiny. The private subnet creates an isolated environment where application servers and databases run with no direct internet connectivity. This segregation follows the zero-trust principle where we assume the DMZ will eventually be compromised and design the private subnet to remain secure even in that scenario.

**Layer-by-Layer Security Implementation:**

Starting with the outermost layer, the Internet Gateway provides the controlled entry point to the VPC. Unlike a traditional router that simply forwards traffic, I configured this gateway to work with route tables that explicitly define which subnets can receive internet traffic. Only the public subnet has a route to the Internet Gateway, meaning the private subnet is unreachable from the internet by design, not just by firewall rules.

Network Access Control Lists form the second layer, operating at the subnet boundary. These stateless firewalls evaluate every packet independently, checking both inbound and outbound traffic against numbered rules processed in priority order. I configured separate NACLs for each subnet with rules that embody a deny-by-default philosophy. The public NACL allows only HTTP, HTTPS, and SSH inbound with corresponding ephemeral port ranges for return traffic. The private NACL restricts inbound traffic to only the public subnet's CIDR block, preventing lateral movement even if an attacker gains access to another private subnet in the VPC.

Security Groups provide the third layer at the instance level. Unlike NACLs, these are stateful firewalls that automatically allow return traffic for permitted connections. I created three distinct security groups, each with a specific purpose. The bastion security group allows SSH only from my specific IP address, implementing the principle that administrative access should be tightly controlled. The web server security group allows HTTP from anywhere but SSH only from the bastion security group ID, creating a dependency chain where administrative access requires two-factor authentication—you must have both the SSH key and access to the bastion host. The load balancer security group allows HTTP from anywhere, providing the public interface for the application.

The fourth layer involves the subnet architecture itself. By placing the web server in a subnet with no Internet Gateway route, I made it architecturally impossible for internet traffic to reach the server directly, regardless of firewall configurations. Even if an attacker discovered the private IP address of the web server, packets from the internet cannot route to that address. This represents security through network design rather than just through access controls.

The NAT Gateway provides the fifth layer by offering controlled, unidirectional internet access. The web server can initiate connections outbound to download security patches or access external APIs, but the NAT Gateway does not accept inbound connection requests from the internet. This asymmetric access model is crucial for security because it allows servers to maintain themselves while preventing them from being directly targeted by attackers.

The bastion host architecture forms the sixth layer by implementing the jump box pattern. Administrative access to private resources requires first connecting to the bastion, then jumping from there to the target server. This creates both a security control and an audit trail. All administrative access goes through a single, heavily monitored entry point where connection attempts can be logged, suspicious activity can be detected, and access can be revoked instantly by simply shutting down the bastion host.

**Application Load Balancer Integration:**
The load balancer serves multiple security functions beyond just distributing traffic. It acts as a single point of entry for all user traffic, allowing centralized logging and monitoring. It performs health checks on backend servers, automatically removing compromised or misbehaving instances from the rotation. It terminates HTTP connections, meaning the web server itself never directly handles internet connections—all requests are proxied through the load balancer which can inspect and filter malicious traffic.

I configured the load balancer across multiple availability zones, which provides both high availability and security benefits. If one availability zone experiences an attack or failure, traffic automatically routes to the other zone. This design means the application remains available even during a localized denial of service attack.

**Security Operations Perspective:**
From a security operations viewpoint, this architecture provides multiple monitoring and response points. VPC Flow Logs can capture all network traffic for forensic analysis after security incidents. The load balancer access logs record every HTTP request, providing detailed audit trails. The bastion host serves as a centralized point for monitoring administrative access—by analyzing bastion logs, security teams can detect unauthorized access attempts or suspicious administrative activity.

The architecture also supports incident response procedures. If a web server is compromised, it can be isolated instantly by removing it from the load balancer target group, preventing further attacker access while preserving the instance for forensic investigation. The private subnet placement means a compromised web server cannot easily pivot to attack other internet resources or participate in botnet activities because all its outbound traffic must flow through the monitored NAT Gateway.

Real-World Application:
This architecture pattern directly applies to production e-commerce sites, SaaS applications, and enterprise web services. The separation of public and private tiers scales from small applications to massive distributed systems. The security principles demonstrated here—network segmentation, defense-in-depth, bastion host patterns, load balancer protection—represent industry standard practices that security engineers implement in real-world cloud environments.
Technical Artifacts: Complete set of architecture diagrams showing network topology, security group rules, NACL configurations, route tables, and traffic flow patterns. Screenshots demonstrate each security layer and the isolated nature of private subnet resources. Interactive HTML architecture visualization allows detailed exploration of the design.

**Technologies Used**

AWS VPC (Virtual Private Cloud)
AWS EC2 (Elastic Compute Cloud)
Application Load Balancer
NAT Gateway
Security Groups
Network Access Control Lists (NACLs)
Elastic IP
Multiple Availability Zones

**Architecture Overview:** The architecture consists of a VPC with CIDR block 10.0.0.0/16, divided into public and private subnets across two availability zones for high availability. Public Subnet (10.0.1.0/24): This subnet hosts internet-facing resources including the Application Load Balancer which receives all incoming web traffic, the Bastion Host which serves as the secure entry point for SSH administration, and the NAT Gateway which provides controlled internet access for private subnet resources. Private Subnet (10.0.2.0/24): This isolated subnet hosts the actual web server, completely hidden from direct internet access. The web server can only be reached through the Application Load Balancer, implementing a zero-trust architecture where no direct connections are permitted.

**Why This Architecture Matters for Cybersecurity:** This project directly applies to cloud security roles because it demonstrates several critical concepts. Network segmentation limits the blast radius of any security breach - if the load balancer were compromised, the attacker still cannot directly access the web server. Defense-in-depth ensures that bypassing one security control does not grant full access. The principle of least privilege is applied at every layer, with each component having only the minimum permissions needed. The architecture is auditable, with clear entry and exit points for traffic that can be logged and monitored.

**Technical Challenges Solved:** During implementation I learned that AWS Load Balancers require at least two availability zones, which taught me about high availability requirements. I configured routing tables properly to ensure the private subnet could reach the internet through NAT while remaining unreachable from the internet. I debugged security group rules to understand the difference between stateful (Security Groups) and stateless (NACLs) firewalls. I verified the architecture by confirming the web server had no public IP but was still accessible through the load balancer.


<img width="1024" height="2082" alt="vpc-architecture-visual" src="https://github.com/user-attachments/assets/90985393-52fc-4cb5-b3b0-f8c49e51cb7f" />

