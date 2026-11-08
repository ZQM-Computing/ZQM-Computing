# Proposed Computing inquiry security and delivery contract — review only

Status: **planning design, no customer-data processing or deployment authorization**. Companion to PR #31 and site PR #93.

## Trust boundaries

Browser on `zqmlabs.com/computing/` → isolated public API endpoint → validated durable acceptance → authorized server-side email delivery → manually qualified sales workflow. The endpoint must not call the private Chiefs, PocketBase admin APIs, Stripe, GitHub write APIs or privileged internal agents. Notification email is **not** a trusted command channel.

## Minimum data contract (v1 proposal)

- Required: contact name, reply email, service category, project description, privacy acknowledgement.
- Optional: organization, general region/jurisdiction, desired deliverable, indicative time window.
- Explicitly disallow attachments, precision coordinates, account credentials and sensitive customer data. State this beside the form; filter and reject risky payloads server-side where feasible, without claiming perfect classification.
- Bound character lengths, reject unknown fields and nested/unbounded structures, normalize inputs, and escape all content in notification templates.
- Avoid using supplied email addresses in a raw mail header; use configured FROM, validated reply-to policy and trusted recipient allowlist.
- Collect consent only as appropriate to the actual data-use purpose; never opt prospects into marketing automatically.

## Submission state machine

`rejected` → no accepted record; `accepted` → authenticated idempotency reference persisted; `queued` → notification task reliably recorded; `notified` → email provider acknowledges acceptance; `delivery_failed` → retry exhausted or explicit operator handling; `closed` → handled under retention rules. Provider acceptance is not proof of inbox arrival.

Only return successful acknowledgement after durable acceptance, not after merely scheduling an unobserved network call. Ensure retries do not create duplicate prospect records or repeated unchecked emails.

## Operational controls

- Request-size and shape limits; rate limiting with anti-abuse controls; CORS/Origin checks as defense-in-depth, not authentication; bounded request budget.
- Service-specific least-privilege API token and secrets held in server environment, never in HTML, JS, URLs or Git.
- Restricted recipients, bounded retries/backoff, dead-letter or recoverable failure path, and redacted operational logs.
- Explicit data steward and retention period, deletion/export process, privacy disclosure, vendor/data-processing terms and notification access control before launch.
- Prevent customer PII in GitHub issues/PRs, public analytics, exception traces, query strings, build artifacts and model prompts by default.
- No automated scoring or decision making on leads without a separately reviewed policy.

## Pre-production test matrix

1. Valid minimal input returns a receipt only after durable acceptance.
2. Invalid email, unsupported service, oversize/unknown fields and malformed JSON are rejected without delivering mail.
3. Header injection, markup injection, linebreaks in name/email, unicode and hostile text remain inert.
4. Rate limits and abuse checks are enforced across repeated requests; appropriate accessibility fallback exists.
5. Simulated mail provider outage leaves a recoverable state; retry is idempotent; errors remain visible.
6. Submission from unauthorized origin does not bypass controls; replayed request does not duplicate acceptance.
7. Logs and analytics contain no submitted descriptions, full email addresses or secret values.
8. Retention expiry and manual deletion requests behave as documented.
9. The form and API are not active merely because marketing pages build successfully.
10. A qualified business inquiry is routed to Computing; Labs inquiries cannot be silently cross-routed.

## Integration release gate

The static site PR must not include a live form action targeting an unapproved endpoint. Host form UI and backend may be designed in separate review PRs. Live activation requires security/privacy acceptance, notification delivery evidence, operational ownership and separate owner release approval.
