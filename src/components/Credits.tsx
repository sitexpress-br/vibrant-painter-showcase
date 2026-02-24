import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import sitexpressLogo from "@/assets/sitexpress-logo.png";

const Credits = () => {
  return (
    <section
      className="w-full bg-white flex items-center justify-center 
                 pt-[10px] pb-[100px]  // <-- Padding para mobile
                 md:py-[5px] md:h-[50px]" // <-- Reset para desktop
    >
      <div
        className="flex items-center gap-3 
                   flex-col md:flex-row" // Layout responsivo
      >
        <span className="text-sm text-gray-600 font-body">Desenvolvido em 3 dias por:</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://sitexpress.com.br"
                target="_blank"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img src={sitexpressLogo} alt="SiteXpress" className="h-7 w-auto" />
              </a>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white border-black">
              <p>Criamos o site profissional da sua empresa em até 3 dias!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Credits;
