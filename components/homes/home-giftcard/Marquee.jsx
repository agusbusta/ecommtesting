import React from "react";

export default function Marquee() {
  return (
    <section className="flat-spacing-9 pt_0">
      <div className="tf-marquee type-big">
        <div className="wrap-marquee">
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={44}
                viewBox="0 0 41 44"
                fill="none"
              >
                <path
                  d="M39.8055 21.092C35.4409 21.0775 30.8593 20.1853 27.411 17.3399C24.5125 14.9478 22.7908 11.5526 21.9565 7.93551C21.4356 5.67845 21.2475 3.36835 21.262 1.05825C21.262 0.575971 20.8762 0.36377 20.5 0.36377C20.1238 0.36377 19.738 0.575971 19.738 1.05825C19.7573 4.99845 19.2027 9.07368 17.3652 12.6136C15.6145 15.9847 12.7305 18.5359 9.15686 19.8333C6.60562 20.7592 3.89523 21.0872 1.19448 21.0968C0.712202 21.0968 0.5 21.4875 0.5 21.8636C0.5 22.2398 0.712202 22.6305 1.19448 22.6305C5.55908 22.6449 10.1407 23.5371 13.589 26.3826C16.4875 28.7747 18.2092 32.1699 19.0435 35.787C19.5644 38.044 19.7476 40.3541 19.738 42.6642C19.738 43.1465 20.1238 43.3587 20.5 43.3587C20.8762 43.3587 21.262 43.1465 21.262 42.6642C21.2427 38.724 21.7973 34.6488 23.6348 31.1089C25.3855 27.7378 28.2695 25.1865 31.8431 23.8892C34.3944 22.9632 37.1048 22.6353 39.8055 22.6256C40.2878 22.6256 40.5 22.235 40.5 21.8588C40.5 21.4826 40.2878 21.092 39.8055 21.092ZM26.5381 25.2299C23.3985 27.7522 21.4838 31.4561 20.5772 35.3288C20.5482 35.4445 20.5289 35.5651 20.5 35.6809C20.0901 33.8193 19.4727 32.0107 18.5854 30.318C16.6659 26.6527 13.4829 23.9423 9.6102 22.5195C8.87714 22.2495 8.12479 22.0324 7.36279 21.854C9.92368 21.2415 12.3544 20.1757 14.4571 18.4877C17.5967 15.9654 19.5113 12.2615 20.418 8.38885C20.447 8.2731 20.4662 8.15253 20.4952 8.03679C20.9051 9.89837 21.5224 11.7069 22.4098 13.3997C24.3293 17.065 27.5123 19.7754 31.385 21.1981C32.118 21.4682 32.8704 21.6852 33.6324 21.8636C31.0715 22.481 28.6408 23.542 26.5381 25.2299Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text fw-6">The benefits of gifting with us.</p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={44}
                viewBox="0 0 41 44"
                fill="none"
              >
                <path
                  d="M39.8055 21.092C35.4409 21.0775 30.8593 20.1853 27.411 17.3399C24.5125 14.9478 22.7908 11.5526 21.9565 7.93551C21.4356 5.67845 21.2475 3.36835 21.262 1.05825C21.262 0.575971 20.8762 0.36377 20.5 0.36377C20.1238 0.36377 19.738 0.575971 19.738 1.05825C19.7573 4.99845 19.2027 9.07368 17.3652 12.6136C15.6145 15.9847 12.7305 18.5359 9.15686 19.8333C6.60562 20.7592 3.89523 21.0872 1.19448 21.0968C0.712202 21.0968 0.5 21.4875 0.5 21.8636C0.5 22.2398 0.712202 22.6305 1.19448 22.6305C5.55908 22.6449 10.1407 23.5371 13.589 26.3826C16.4875 28.7747 18.2092 32.1699 19.0435 35.787C19.5644 38.044 19.7476 40.3541 19.738 42.6642C19.738 43.1465 20.1238 43.3587 20.5 43.3587C20.8762 43.3587 21.262 43.1465 21.262 42.6642C21.2427 38.724 21.7973 34.6488 23.6348 31.1089C25.3855 27.7378 28.2695 25.1865 31.8431 23.8892C34.3944 22.9632 37.1048 22.6353 39.8055 22.6256C40.2878 22.6256 40.5 22.235 40.5 21.8588C40.5 21.4826 40.2878 21.092 39.8055 21.092ZM26.5381 25.2299C23.3985 27.7522 21.4838 31.4561 20.5772 35.3288C20.5482 35.4445 20.5289 35.5651 20.5 35.6809C20.0901 33.8193 19.4727 32.0107 18.5854 30.318C16.6659 26.6527 13.4829 23.9423 9.6102 22.5195C8.87714 22.2495 8.12479 22.0324 7.36279 21.854C9.92368 21.2415 12.3544 20.1757 14.4571 18.4877C17.5967 15.9654 19.5113 12.2615 20.418 8.38885C20.447 8.2731 20.4662 8.15253 20.4952 8.03679C20.9051 9.89837 21.5224 11.7069 22.4098 13.3997C24.3293 17.065 27.5123 19.7754 31.385 21.1981C32.118 21.4682 32.8704 21.6852 33.6324 21.8636C31.0715 22.481 28.6408 23.542 26.5381 25.2299Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text fw-6">Flexible. Safe.Easy.</p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={44}
                viewBox="0 0 41 44"
                fill="none"
              >
                <path
                  d="M39.8055 21.092C35.4409 21.0775 30.8593 20.1853 27.411 17.3399C24.5125 14.9478 22.7908 11.5526 21.9565 7.93551C21.4356 5.67845 21.2475 3.36835 21.262 1.05825C21.262 0.575971 20.8762 0.36377 20.5 0.36377C20.1238 0.36377 19.738 0.575971 19.738 1.05825C19.7573 4.99845 19.2027 9.07368 17.3652 12.6136C15.6145 15.9847 12.7305 18.5359 9.15686 19.8333C6.60562 20.7592 3.89523 21.0872 1.19448 21.0968C0.712202 21.0968 0.5 21.4875 0.5 21.8636C0.5 22.2398 0.712202 22.6305 1.19448 22.6305C5.55908 22.6449 10.1407 23.5371 13.589 26.3826C16.4875 28.7747 18.2092 32.1699 19.0435 35.787C19.5644 38.044 19.7476 40.3541 19.738 42.6642C19.738 43.1465 20.1238 43.3587 20.5 43.3587C20.8762 43.3587 21.262 43.1465 21.262 42.6642C21.2427 38.724 21.7973 34.6488 23.6348 31.1089C25.3855 27.7378 28.2695 25.1865 31.8431 23.8892C34.3944 22.9632 37.1048 22.6353 39.8055 22.6256C40.2878 22.6256 40.5 22.235 40.5 21.8588C40.5 21.4826 40.2878 21.092 39.8055 21.092ZM26.5381 25.2299C23.3985 27.7522 21.4838 31.4561 20.5772 35.3288C20.5482 35.4445 20.5289 35.5651 20.5 35.6809C20.0901 33.8193 19.4727 32.0107 18.5854 30.318C16.6659 26.6527 13.4829 23.9423 9.6102 22.5195C8.87714 22.2495 8.12479 22.0324 7.36279 21.854C9.92368 21.2415 12.3544 20.1757 14.4571 18.4877C17.5967 15.9654 19.5113 12.2615 20.418 8.38885C20.447 8.2731 20.4662 8.15253 20.4952 8.03679C20.9051 9.89837 21.5224 11.7069 22.4098 13.3997C24.3293 17.065 27.5123 19.7754 31.385 21.1981C32.118 21.4682 32.8704 21.6852 33.6324 21.8636C31.0715 22.481 28.6408 23.542 26.5381 25.2299Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text fw-6">The benefits of gifting with us.</p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={44}
                viewBox="0 0 41 44"
                fill="none"
              >
                <path
                  d="M39.8055 21.092C35.4409 21.0775 30.8593 20.1853 27.411 17.3399C24.5125 14.9478 22.7908 11.5526 21.9565 7.93551C21.4356 5.67845 21.2475 3.36835 21.262 1.05825C21.262 0.575971 20.8762 0.36377 20.5 0.36377C20.1238 0.36377 19.738 0.575971 19.738 1.05825C19.7573 4.99845 19.2027 9.07368 17.3652 12.6136C15.6145 15.9847 12.7305 18.5359 9.15686 19.8333C6.60562 20.7592 3.89523 21.0872 1.19448 21.0968C0.712202 21.0968 0.5 21.4875 0.5 21.8636C0.5 22.2398 0.712202 22.6305 1.19448 22.6305C5.55908 22.6449 10.1407 23.5371 13.589 26.3826C16.4875 28.7747 18.2092 32.1699 19.0435 35.787C19.5644 38.044 19.7476 40.3541 19.738 42.6642C19.738 43.1465 20.1238 43.3587 20.5 43.3587C20.8762 43.3587 21.262 43.1465 21.262 42.6642C21.2427 38.724 21.7973 34.6488 23.6348 31.1089C25.3855 27.7378 28.2695 25.1865 31.8431 23.8892C34.3944 22.9632 37.1048 22.6353 39.8055 22.6256C40.2878 22.6256 40.5 22.235 40.5 21.8588C40.5 21.4826 40.2878 21.092 39.8055 21.092ZM26.5381 25.2299C23.3985 27.7522 21.4838 31.4561 20.5772 35.3288C20.5482 35.4445 20.5289 35.5651 20.5 35.6809C20.0901 33.8193 19.4727 32.0107 18.5854 30.318C16.6659 26.6527 13.4829 23.9423 9.6102 22.5195C8.87714 22.2495 8.12479 22.0324 7.36279 21.854C9.92368 21.2415 12.3544 20.1757 14.4571 18.4877C17.5967 15.9654 19.5113 12.2615 20.418 8.38885C20.447 8.2731 20.4662 8.15253 20.4952 8.03679C20.9051 9.89837 21.5224 11.7069 22.4098 13.3997C24.3293 17.065 27.5123 19.7754 31.385 21.1981C32.118 21.4682 32.8704 21.6852 33.6324 21.8636C31.0715 22.481 28.6408 23.542 26.5381 25.2299Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text fw-6">Flexible. Safe.Easy.</p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={44}
                viewBox="0 0 41 44"
                fill="none"
              >
                <path
                  d="M39.8055 21.092C35.4409 21.0775 30.8593 20.1853 27.411 17.3399C24.5125 14.9478 22.7908 11.5526 21.9565 7.93551C21.4356 5.67845 21.2475 3.36835 21.262 1.05825C21.262 0.575971 20.8762 0.36377 20.5 0.36377C20.1238 0.36377 19.738 0.575971 19.738 1.05825C19.7573 4.99845 19.2027 9.07368 17.3652 12.6136C15.6145 15.9847 12.7305 18.5359 9.15686 19.8333C6.60562 20.7592 3.89523 21.0872 1.19448 21.0968C0.712202 21.0968 0.5 21.4875 0.5 21.8636C0.5 22.2398 0.712202 22.6305 1.19448 22.6305C5.55908 22.6449 10.1407 23.5371 13.589 26.3826C16.4875 28.7747 18.2092 32.1699 19.0435 35.787C19.5644 38.044 19.7476 40.3541 19.738 42.6642C19.738 43.1465 20.1238 43.3587 20.5 43.3587C20.8762 43.3587 21.262 43.1465 21.262 42.6642C21.2427 38.724 21.7973 34.6488 23.6348 31.1089C25.3855 27.7378 28.2695 25.1865 31.8431 23.8892C34.3944 22.9632 37.1048 22.6353 39.8055 22.6256C40.2878 22.6256 40.5 22.235 40.5 21.8588C40.5 21.4826 40.2878 21.092 39.8055 21.092ZM26.5381 25.2299C23.3985 27.7522 21.4838 31.4561 20.5772 35.3288C20.5482 35.4445 20.5289 35.5651 20.5 35.6809C20.0901 33.8193 19.4727 32.0107 18.5854 30.318C16.6659 26.6527 13.4829 23.9423 9.6102 22.5195C8.87714 22.2495 8.12479 22.0324 7.36279 21.854C9.92368 21.2415 12.3544 20.1757 14.4571 18.4877C17.5967 15.9654 19.5113 12.2615 20.418 8.38885C20.447 8.2731 20.4662 8.15253 20.4952 8.03679C20.9051 9.89837 21.5224 11.7069 22.4098 13.3997C24.3293 17.065 27.5123 19.7754 31.385 21.1981C32.118 21.4682 32.8704 21.6852 33.6324 21.8636C31.0715 22.481 28.6408 23.542 26.5381 25.2299Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text fw-6">The benefits of gifting with us.</p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={44}
                viewBox="0 0 41 44"
                fill="none"
              >
                <path
                  d="M39.8055 21.092C35.4409 21.0775 30.8593 20.1853 27.411 17.3399C24.5125 14.9478 22.7908 11.5526 21.9565 7.93551C21.4356 5.67845 21.2475 3.36835 21.262 1.05825C21.262 0.575971 20.8762 0.36377 20.5 0.36377C20.1238 0.36377 19.738 0.575971 19.738 1.05825C19.7573 4.99845 19.2027 9.07368 17.3652 12.6136C15.6145 15.9847 12.7305 18.5359 9.15686 19.8333C6.60562 20.7592 3.89523 21.0872 1.19448 21.0968C0.712202 21.0968 0.5 21.4875 0.5 21.8636C0.5 22.2398 0.712202 22.6305 1.19448 22.6305C5.55908 22.6449 10.1407 23.5371 13.589 26.3826C16.4875 28.7747 18.2092 32.1699 19.0435 35.787C19.5644 38.044 19.7476 40.3541 19.738 42.6642C19.738 43.1465 20.1238 43.3587 20.5 43.3587C20.8762 43.3587 21.262 43.1465 21.262 42.6642C21.2427 38.724 21.7973 34.6488 23.6348 31.1089C25.3855 27.7378 28.2695 25.1865 31.8431 23.8892C34.3944 22.9632 37.1048 22.6353 39.8055 22.6256C40.2878 22.6256 40.5 22.235 40.5 21.8588C40.5 21.4826 40.2878 21.092 39.8055 21.092ZM26.5381 25.2299C23.3985 27.7522 21.4838 31.4561 20.5772 35.3288C20.5482 35.4445 20.5289 35.5651 20.5 35.6809C20.0901 33.8193 19.4727 32.0107 18.5854 30.318C16.6659 26.6527 13.4829 23.9423 9.6102 22.5195C8.87714 22.2495 8.12479 22.0324 7.36279 21.854C9.92368 21.2415 12.3544 20.1757 14.4571 18.4877C17.5967 15.9654 19.5113 12.2615 20.418 8.38885C20.447 8.2731 20.4662 8.15253 20.4952 8.03679C20.9051 9.89837 21.5224 11.7069 22.4098 13.3997C24.3293 17.065 27.5123 19.7754 31.385 21.1981C32.118 21.4682 32.8704 21.6852 33.6324 21.8636C31.0715 22.481 28.6408 23.542 26.5381 25.2299Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text fw-6">Flexible. Safe.Easy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
