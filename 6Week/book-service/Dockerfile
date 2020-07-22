FROM node:12.18

COPY build lightlyburning-book-service/build/
COPY node_modules lightlyburning-book-service/node_modules/
COPY tenacious-text-279818-efd74155cec4.json lightlyburning-book-service/

CMD npm run deploy --prefix lightlyburning-book-service/build