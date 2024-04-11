import Image from "next/image";
import { AboutPopupParams } from "@/app/lib/types";

export default function AboutPopup(props: AboutPopupParams) {
  return (
    <>
      <button
        className="btn btn-secondary text-accent-content btn-wide text-l"
        onClick={() => {
          const element = document.getElementById(
            props.title,
          ) as HTMLDialogElement;
          element.showModal();
          if (element) {
            element.scrollTop = 0;
            element.scrollTo(0, 0);
          }
        }}
      >
        {props.title}
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={props.title} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.title}</h3>
          <div>
            {props.images?.map((image, index) => (
              <div key={index}>
                <Image
                  src={"/static/IMG_" + image + ".JPG"}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="py-2"
                />
              </div>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
