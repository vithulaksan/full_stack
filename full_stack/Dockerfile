FROM debian:bullseye

WORKDIR /src
# copie de requirements.txt pour installer les modules
ADD requirements.txt /src
ENV PYTHONUNBUFFERED=1 
# installer python, pip, nginx et les modules
# RUN  apt-get install python3  &&  apt install python3-pip  &&  apt install nginx  && pip install -r requirements.txt
RUN  apt-get update 
RUN  apt-get install python3-pip python3-dev -y

RUN pip3 install -r requirements.txt

# # installation de mongodb
# RUN curl -fsSL https://www.mongodb.org/static/pgp/server-5.0.asc| gpg --dearmor -o /etc/apt/trusted.gpg.d/mongodb-5.gpg && apt-get install gnupg2 && echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" |  tee /etc/apt/sources.list.d/mongodb-org-5.0.list && apt-get update

# RUN apt-get install mongodb-org mongodb-org-database mongodb-org-server mongodb-org-shell mongodb-org-mongos mongodb-org-tools -y
# RUN sed -i "s,\\(^[[:blank:]]*bindIp:\\) .*,\\1 0.0.0.0," /etc/mongod.conf
# # commande pour lancer mongodb
# RUN /usr/bin/mongod -f /etc/mongod.conf &

# copie du projet 
ADD . /src/
#RUN python3 manage.py makemigrations
#RUN python3 manage.py migrate
EXPOSE 8000
# ENTRYPOINT ["/usr/bin/mongod", "-f", "/etc/mongod.conf"]
# CMD python3 manage.py runserver 0.0.0.0:8000