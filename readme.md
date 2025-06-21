<!-- Book Model Fields & Validation -->
id
title (string) — Mandatory. The book’s title.
author (string) — Mandatory. The book’s author.
genre (string) — Mandatory. Must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY.
isbn (string) — Mandatory and unique. The book’s International Standard Book Number.
description (string) — Optional. A brief summary or description of the book.
copies (number) — Mandatory. Non-negative integer representing total copies available.
available (boolean) — Defaults to true. Indicates if the book is currently available for borrowing.


<!-- Borrow Model Fields & Validation -->
book (objectId) — Mandatory. References the borrowed book’s ID.
quantity (number) — Mandatory. Positive integer representing the number of copies borrowed.
dueDate (date) — Mandatory. The date by which the book must be returned.


<!-- User -->
name
email
phone
password
role