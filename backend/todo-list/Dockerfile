FROM ubuntu:latest AS build

# instala Java
RUN apt-get update && apt-get install -y openjdk-17-jdk

# copia projeto
COPY . .

# dá permissão ao gradlew
RUN chmod +x gradlew

# build com Gradle Wrapper
RUN ./gradlew build

# -----------------------------

FROM openjdk:17-jdk-slim

EXPOSE 8080

# copia o JAR gerado pelo Gradle
COPY --from=build build/libs/todo-list-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]