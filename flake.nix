{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    astal.url = "github:astal-sh/libastal";
    astal-tray.url = "github:astal-sh/tray";
    astal-network.url = "github:astal-sh/network";
    astal-wireplumber.url = "github:astal-sh/wireplumber";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  }@inputs: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};

    nativeBuildInputs = with pkgs; [
      wrapGAppsHook
      gobject-introspection
      nodejs
      libdbusmenu-gtk3
    ];

    buildInputs = with pkgs; [
      gjs
      cava
      networkmanager
      inputs.astal.packages.${system}.default
      inputs.astal-tray.packages.${system}.default
      inputs.astal-network.packages.${system}.default
      inputs.astal-wireplumber.packages.${system}.default
    ];
  in {
    packages.${system}.default = pkgs.stdenv.mkDerivation rec {
      inherit nativeBuildInputs buildInputs;

      pname = "astal-config";
      version = "0.1.0";

      src = pkgs.buildNpmPackage {
        name = pname;
        src = ./.;
        npmDepsHash = "sha256-0B7srWNeRYdo8JTb2epi3p4J755MqsE+DfuIDKUOxjc=";
        installPhase = ''
          mkdir $out
          cp -r dist/* $out
        '';
      };

      installPhase = ''
        mkdir -p $out/bin
        mkdir -p $out/share
        cp -r * $out/share

        echo "#!/usr/bin/env bash" > $out/bin/${pname}
        echo "$out/share/main.js \$@" >> $out/bin/${pname}
        chmod +x $out/bin/${pname}
      '';
    };

    devShells.${system}.default = pkgs.mkShell {
      inherit nativeBuildInputs buildInputs;
    };
  };
}
