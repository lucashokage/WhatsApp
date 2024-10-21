# Usa una imagen base adecuada
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto que tu aplicación usará
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["npm", "start"]
