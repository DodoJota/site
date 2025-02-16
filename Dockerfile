# Usa uma imagem oficial do Python 3.10
FROM python:3.10

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY . .

# Instala as dependências do Flask
RUN pip install --no-cache-dir -r requirements.txt

# Define a variável de ambiente do Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Expõe a porta 5000 (onde o Flask roda)
EXPOSE 5000

# Comando padrão para rodar a aplicação
CMD ["flask", "run"]
