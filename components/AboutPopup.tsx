import Image from "next/image";
import { AboutPopupParams } from "@/app/lib/types";

export default function AboutPopup(props: AboutPopupParams) {
  return (
    <>
      <button
        className="btn btn-secondary text-accent-content btn-wide text-l"
        onClick={() =>
          (
            document.getElementById(props.title) as HTMLDialogElement
          ).showModal()
        }
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
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
