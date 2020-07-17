FROM node:12.18

COPY build lightlyburning/build/
COPY node_modules lightlyburning/node_modules/
COPY tenacious-text-279818-efd74155cec4.json lightlyburning/

CMD ['npm', 'run', 'deploy', '--prefix', 'lightlyburning/build']