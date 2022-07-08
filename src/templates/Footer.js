import React from "react";
import Button from "components/Button";
import IconText from "templates/IconText";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  if (year !== 2022) year = `2022 - ${year}`;

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              Kami melayani para pengguna dengan sepenuh hati
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Pengguna Baru</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Sewa Hotel Villa
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Pembayaran
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Tentang Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Karir
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Kontak Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@dntrentcar">
                  support@dntrentcar.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  089 - 515 - 77 - 0866
                </Button>
              </li>
              <li className="list-group-item">
                <span>DNTRENTCAR - PASURUAN</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright {year} • All rights reserved • DNTRENTCAR
          </div>
        </div>
      </div>
    </footer>
  );
}
