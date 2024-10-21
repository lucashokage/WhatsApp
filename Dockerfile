
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
