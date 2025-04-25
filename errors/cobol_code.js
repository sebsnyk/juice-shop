*> This is COBOL code, not JavaScript.
       IDENTIFICATION DIVISION.
       PROGRAM-ID. FAIL-EXTRACTOR.
       AUTHOR. Test User.
       DATE-WRITTEN. 2025-04-25.

       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT OPTIONAL IN-FILE ASSIGN TO "input.dat"
               ORGANIZATION IS LINE SEQUENTIAL.

       DATA DIVISION.
       FILE SECTION.
       FD  IN-FILE.
       01  IN-RECORD           PIC X(80).

       WORKING-STORAGE SECTION.
       01  WS-INPUT-STATUS     PIC X(2).
           88 EOF              VALUE "10".
       01  WS-LINE-COUNT       PIC 9(5) VALUE 0.
       01  WS-MESSAGE          PIC X(50) VALUE "Processing Line: ".

       PROCEDURE DIVISION.
       START-PROGRAM.
           OPEN INPUT IN-FILE.
           READ IN-FILE
               AT END SET EOF TO TRUE
           END-READ.
           PERFORM PROCESS-LINES UNTIL EOF.
           CLOSE IN-FILE.
           DISPLAY "Finished Processing. Lines: " WS-LINE-COUNT.
           STOP RUN.

       PROCESS-LINES.
           ADD 1 TO WS-LINE-COUNT.
           DISPLAY WS-MESSAGE WS-LINE-COUNT " - " IN-RECORD(1:40). *> Display part of record
           READ IN-FILE
               AT END SET EOF TO TRUE
           END-READ.

       END PROGRAM FAIL-EXTRACTOR.
