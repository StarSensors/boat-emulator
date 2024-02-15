# boat-emulator

First, create the necessary folders

```
./scripts/chown-tb-data.sh
```

Then do

```
docker compose up -d
```

(It takes a while for Thingsboard to fully initiate. Please check the container logs.)

## Re-initiating

To recreate a fresh install do:

```
./scripts/clean-tb-data.sh
```

## Swagger docs

[Click here](http://localhost:8080/swagger-ui/)
