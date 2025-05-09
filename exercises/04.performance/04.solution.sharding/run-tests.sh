npx vitest run --reporter=blob --shard=1/4 & \
npx vitest run --reporter=blob --shard=2/4 & \
npx vitest run --reporter=blob --shard=3/4 & \
npx vitest run --reporter=blob --shard=4/4 & \
wait
