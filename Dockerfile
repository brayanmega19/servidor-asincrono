# En este caso se utiliza la imagen oficial de node como imagen
FROM node:14

# poner el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# copiar hacia el directorio de trabajo
COPY package*.json ./

#Voy a poner en dos idiomas a partir de aqui
# Install dependencies//Instalar dependencias
RUN npm install

# Copy all files from the current directory to the working directory//Copiar 
#todos los archivos del directorio actual al directorio working
COPY . .

# Use por 3021//utilizar el puerto 3021
EXPOSE 3021

# Command to run the Node.js server//comando para correr el servidor Node.js 
CMD ["node", "server.js"]
