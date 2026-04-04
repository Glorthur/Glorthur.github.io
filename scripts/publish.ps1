$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$env:Path = "C:\Program Files\nodejs;C:\Program Files\Git\cmd;$env:Path"

Push-Location $repoRoot
try {
  npm run sync-notes
  npx quartz sync
} finally {
  Pop-Location
}
