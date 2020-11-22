#Node + Express + LetsEncrypt : Generate a free SSL certificate and run an HTTPS server in 5 minutes or less
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot
certbot certonly --manual
# 1. Type your domain name(s) without the protocol part. For instance: yourdomain.com or even muchdomain.verysite.
# 2. Type Y then ENTER.
#/.well-known/acme-challenge/a-string
# http://apipot.com/.well-known/acme-challenge/a-string