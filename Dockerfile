# Usar uma imagem base leve com Java 17
FROM openjdk:17-jdk-slim

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o arquivo JAR gerado para o container
COPY target/*.jar app.jar

# Expor a porta da aplicação (por exemplo, 8080)
EXPOSE 8080

# Comando para rodar o JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
