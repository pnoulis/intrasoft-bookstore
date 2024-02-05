const validators = {
  title(string) {
    const maxLength = 40;
    if (!string) return "Don't forget the title!";
    else if (string.length > 40) return "Title must not exceed 40 characters";
    else if (/[^\w\s\n-,.:%"']/.test(string))
      return "Invalid title, allowed characters are: [ateuh]";
    else return false;
  },

  description(string) {
    const LENGTH_LIMIT = 200,
      emptyInput = "The description was left empty!",
      tooLong = `The description must be less than ${LENGTH_LIMIT} characters long!`,
      wrongFormat = `Description field is allowed only ${charsAllowedProduct}`;

    if (!string) return emptyInput;
    else if (string.length > LENGTH_LIMIT) return tooLong;
    else if (/[^\w\s-,.:%"']/.test(string)) return wrongFormat;
    else return false;
  },
  tags: function (array) {
    const emptyInput = "No tag was selected!";

    if (!array.length) return emptyInput;
    else return false;
  },
  img: function (img) {
    if (!(img instanceof File) && Object.keys(img).length) return false;
    if (!img.name) return "you forgot to upload an image";

    const LENGTH_LIMIT = 124, // completely arbitrary
      ext = PathConstructor.extractExt(img.name),
      filename = PathConstructor.extractName(img.name),
      mime = img.type,
      IMG_FORMATS = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/tiff",
        "image/bmp",
      ],
      tooLong = `The image name exceeds ${LENGTH_LIMIT} chararcters, please shorten it`,
      illegalChars =
        "Please reformat the image file name to only include characters from" +
        "the set: [a-zA-Z0-9-_.] (no spaces are allowed)",
      notAnImg =
        "The file you tried to upload is not an img." +
        "The accepted formats are: (jpg, jpeg), (png), (gif), (webp), (bmp), (svg+xml)",
      isImg = function () {
        let match = false;
        IMG_FORMATS.forEach((format) => {
          if (format === mime) match = true;
        });
        return match;
      };

    if (filename.length > LENGTH_LIMIT) return tooLong;
    else if (/[^a-zA-Z0-9-_]/.test(filename)) return illegalChars;
    else if (!isImg()) return notAnImg;
    else return false;
  },
  categories() {},
  publisher() {},
  year() {},
  pages() {},
  isbn10() {},
  isbn13() {},
};

function validate(key, value) {
  return Object.hasOwn(validators, key) ? validators[key](value) : false;
}

export { validate };
