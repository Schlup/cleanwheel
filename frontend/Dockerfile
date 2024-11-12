# Etapa de build
FROM node:18 AS build

WORKDIR /app

# Copie o package.json e package-lock.json
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos restantes
COPY . .

# Crie o build do frontend
RUN npm run build

# Etapa para servir o frontend com o Nginx
FROM nginx:alpine

# Copie o build gerado do primeiro estágio
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80 para o servidor Nginx
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]