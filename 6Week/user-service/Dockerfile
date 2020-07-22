FROM node:12.18

COPY build lightlyburning-user-service/build/
COPY node_modules lightlyburning-user-service/node_modules/
COPY tenacious-text-279818-efd74155cec4.json lightlyburning-user-service/

CMD npm run deploy --prefix lightlyburning-user-service/build