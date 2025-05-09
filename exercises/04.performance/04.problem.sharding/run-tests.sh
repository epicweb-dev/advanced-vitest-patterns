# 🐨 Chain four "npx vitest run" commands, each having the following options:
# --reporter=blob
# --shard=N/4 (replace "N" with the number of this command, e.g. 2/4)
# 💰 npx vitest run --a=b --c=d
# 💰 commandA & commandB & commandC
#
# 🐨 Add the `wait` command at the end of the command chain.
# This way, the process will wait until all the sharded test runs are finished.
# 💰 commands & wait