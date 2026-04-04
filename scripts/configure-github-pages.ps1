[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$Username,

  [Parameter(Mandatory = $true)]
  [string]$Repository
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $repoRoot "quartz.config.ts"

if (-not (Test-Path $configPath)) {
  throw "Quartz config not found: $configPath"
}

$baseUrl = if ($Repository -ieq "$Username.github.io") {
  "$Username.github.io"
} else {
  "$Username.github.io/$Repository"
}

$config = Get-Content $configPath -Raw

if ($config -match 'baseUrl:\s*"[^"]*"') {
  $updated = [regex]::Replace($config, 'baseUrl:\s*"[^"]*"', "baseUrl: `"$baseUrl`"")
} else {
  $updated = $config -replace 'locale:\s*"en-US",', "locale: `"en-US`"," + [Environment]::NewLine + "    baseUrl: `"$baseUrl`","
}

Set-Content -Path $configPath -Value $updated -NoNewline

Write-Output "Configured Quartz baseUrl as $baseUrl"
