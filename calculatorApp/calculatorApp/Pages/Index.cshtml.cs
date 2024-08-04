using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class IndexModel : PageModel
{
    [BindProperty]
    public double? Number1 { get; set; }

    [BindProperty]
    public string Operator { get; set; }

    [BindProperty]
    public double? Number2 { get; set; }

    public double? Result { get; set; }

    public string ErrorMessage { get; set; }

    public void OnPost()
    {
        if (!Number1.HasValue)
        {
            ErrorMessage = "Please enter the first number.";
            return;
        }

        if (string.IsNullOrEmpty(Operator))
        {
            ErrorMessage = "Please select an operator.";
            return;
        }

        if (!Number2.HasValue)
        {
            ErrorMessage = "Please enter the second number.";
            return;
        }

        // Reset ErrorMessage if validation passes
        ErrorMessage = null;

        // Perform the calculation
        switch (Operator)
        {
            case "+":
                Result = Number1 + Number2;
                break;
            case "-":
                Result = Number1 - Number2;
                break;
            case "*":
                Result = Number1 * Number2;
                break;
            case "/":
                if (Number2 != 0)
                {
                    Result = Number1 / Number2;
                }
                else
                {
                    ErrorMessage = "Cannot divide by zero.";
                    Result = null;
                }
                break;
        }
    }
}
