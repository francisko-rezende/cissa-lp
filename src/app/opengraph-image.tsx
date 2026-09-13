import { ImageResponse } from "next/og";

export const alt = "Lar de Idosos Vovó Nice — Juiz de Fora, MG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#faf7f1",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 26, height: 2, background: "#8ca38b" }} />
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#33585c",
            }}
          >
            Juiz de Fora · Minas Gerais
          </span>
        </div>
        <span
          style={{
            fontSize: 76,
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#24403f",
          }}
        >
          Lar de Idosos Vovó Nice
        </span>
        <span
          style={{
            marginTop: 26,
            fontSize: 34,
            lineHeight: 1.4,
            maxWidth: 820,
            color: "#33585c",
          }}
        >
          Cuidado, conforto e acolhimento para quem sempre cuidou de você.
        </span>
      </div>
    ),
    { ...size }
  );
}
