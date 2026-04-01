import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");

  try {
    const body = await req.json();
    const { club, name, role, email, phone, message } = body;

    if (!email || !name || !club) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Match Control <noreply@matchcontrol.es>",
      to: ["contacto@matchcontrol.es"],
      subject: `Nueva solicitud de demo — ${club}`,
      html: `
        <h2>Nueva solicitud de demo</h2>
        <p><strong>Club:</strong> ${club}</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Cargo:</strong> ${role ?? "—"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone ?? "—"}</p>
        <p><strong>Mensaje:</strong> ${message ?? "—"}</p>
      `,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: "Match Control <noreply@matchcontrol.es>",
      to: [email],
      subject: "Hemos recibido tu solicitud de demo",
      html: `
        <h2>¡Gracias, ${name}!</h2>
        <p>Hemos recibido tu solicitud de demo para <strong>${club}</strong>.</p>
        <p>Nos pondremos en contacto contigo en menos de 24 horas para confirmar la sesión.</p>
        <br/>
        <p>— El equipo de Match Control</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
