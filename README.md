# socialmediakhaled2022_frontend

This project is a part of project of SocialMediaKhaled20222 and here are the instruction of github CI/CD pipeline and how to configure automatically deploy this React frontend part of the app to AWS EC2 instance using Ubuntu 

dev.yml file on Frontend
```sh

name: dev CI

on:
  push:
    branches: [dev]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Install dependencies
      run: |
        npm install --save --legacy-peer-deps
        
    - name: Build
      run: |
        npm run build --if-present
        
    - name: Deploy to EC2 instance
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.HOSTDEV }}
        username:  ${{ secrets.USERDEV }}
        key:  ${{ secrets.KEYDEV }}
        port:  ${{ secrets.PORTDEV }}
        source: build/
        target: /home/ubuntu/deploy/

    - name: Extract and deploy Nginx
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOSTDEV }}
        username:  ${{ secrets.USERDEV }}
        key:  ${{ secrets.KEYDEV }}
        port:  ${{ secrets.PORTDEV }}
        script: |
          cd /home/ubuntu/deploy/
          mkdir build
          cp -TR . build/
          tar -xvf build/deploy.tar -C /var/www/html/
          sudo apt-get update
          sudo apt-get install -y nginx
          sudo systemctl start nginx
          sudo systemctl enable nginx
```

## CI/CD Configuration instructions

### 1. create an aws instance using ubuntu and update ubuntu
```sh
sudo apt-get update
```

### 2. Go to the security folder 
```sh
cd .ssh
```

### 3. Generate key using ssh-keygen
```sh
ssh-keygen -t ed25519 -a 200 -C "khaledreza@gmail.com" 
```

### 4. Copy this private key and put it to the Github Action Secrets for KEYDEV
```sh
cat id_ed25519
```

### 5. Provide rest of the github Action secrets, HOSTDEV=public ip address of the aws instance, USERDEV=ubuntu (default), PORTDEV=22 (default)

### 6. Copy id_ed25519.pub key to the authorized_keys, so that github's ssh request can be validated using this public key. Otherwise there will be (ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey]) because key validation failure
```sh
cat id_ed25519.pub
sudo nano authorized_key
```
Save it with Cntl + x, then press y and then press enter

### 7. We need to some operation only for the first time,
```sh
sudo apt-get install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 8. Configure nginx,
```sh
cd /etc/nginx/sites-available/
sudo nano default
```
Remove everything from default file and past this server block by Cntl + shift + v
```sh
server {
  listen 80 default_server;
  server_name _;

  # react app & front-end files
  location / {
   root /home/ubuntu/deploy/build/;
   try_files $uri /index.html;
  }
}
```
Save it with Cntl + x, then press y and then press enter

### 9. Restart nginx server
```sh
sudo service nginx restart
```

### 10. Browse unsecured public ip of your aws instance, you will see only nginx page, not your application. You need to make your index.html file and every related path/folder executable by chmod +x command
```sh
cd /home/ubuntu/deploy/build/ # Frontend app files are here
chmod +x index.html
cd ..
chmod +x build
cd ..
chmod +x deploy
cd ..
chmod +x ubuntu
cd ..
chmod +x home
```

### 11. Browse the public ip of your aws instance to see your application i.e. http://54.146.201.83/, and it should show your frontend application running in AWS. Congratulation!
```sh
http://54.146.201.83/
```

### 12. Some useful linux command for general use,

```sh
cd # will bring the location to initial place of aws
Cntl + Delete # will delete faster
cp -a /home/ubuntu/deploy/socket/socialmediakhaled2022_socket/. /home/ubuntu/deploy/socket/ # Copy all files of a folder to another file
rm -R socialmediakhaled2022_socket # Remove File with folder 
pwd # show the path of current directory
Cntl + shift + v  # paste copied item
```

