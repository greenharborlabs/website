export function TechnicalVisual() {
  return (
    <div className="technical-visual protocol-visual" aria-hidden="true">
      <div className="protocol-card protocol-client">
        <span>Agent client</span>
        <strong>GET /trust/report</strong>
        <p>domain=example.com&checks=dns,tls</p>
      </div>

      <div className="protocol-rail">
        <span />
        <span />
        <span />
      </div>

      <div className="protocol-card protocol-paygate">
        <span>Paygate guard</span>
        <strong>402 Payment Required</strong>
        <p>Lightning invoice + machine-readable challenge</p>
      </div>

      <div className="protocol-card protocol-report">
        <span>Paid response</span>
        <strong>200 Signed trust report</strong>
        <p>Payment-Receipt + Ed25519 JSON payload</p>
      </div>

      <div className="protocol-invoice">
        <span>Lightning</span>
        <strong>30 sats</strong>
        <p>settled invoice unlocks retry</p>
      </div>
    </div>
  );
}
