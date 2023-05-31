# Sample app

This is a sample app for demonstration purposes

## Docker lab

---

### 1.1 Install docker on EC2

Start with installing docker on your EC2 machine

Docker install helper script

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh --dry-run
```

### 1.2 Build image

```bash
docker build -t sample-app:0.1 .
```

### 1.3 Run application

```
docker run -p 80:80 -d sample-app:0.1
```
