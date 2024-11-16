# Usar uma imagem base do Node.js para desenvolvimento
FROM node:18 AS build

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos do projeto para o container
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Construir o projeto para produção (no caso de uma SPA, como React, Angular, etc)
RUN npm run build

# Usar a imagem base do Nginx
FROM nginx:alpine

# Copiar os arquivos de build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta do Nginx
EXPOSE 3000 

# Rodar o Nginx no foreground
CMD ["nginx", "-g", "daemon off;"]
