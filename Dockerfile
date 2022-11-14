# Imagem de origem usando node versão 16 no Ubuntu Alpine
  FROM node:16-alpine
# Porta de exposição
  EXPOSE 3000
# Diretório de trabalho
  WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
  ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências e fazendo cache
  COPY package.json .
# npm config set unsafe-perm true evita erros de permissão
  RUN npm config set unsafe-perm true
# Instalando dependências de maneira forçada
  RUN npm install --force
# Adicionando o código fonte
  COPY . .
# O comando chown vem de change owner e é usado para alterar o proprietário de um arquivo ou diretório
# A tag -R aplica a alteração recursivamente, ou seja, para todos os arquivos e diretórios internos
  RUN chown -R node /app/node_modules
# Executar os comandos a seguir como o usuário node
  USER node
# Rodando o projeto
  CMD ["npm", "start"]